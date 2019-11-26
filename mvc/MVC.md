---
marp: true
---

# MVC 패턴
----
## 패턴과 아키텍처
- 궁금해서 찾아봤어요..!!
----
### 디자인 패턴

- 프로그래머들이 유용하다고 생각되는 경험을 문제 유형별로 구체화하여 동일한 문제 유형에 대한 해결 방법의 일반화한 패턴
- 간단하고 재활용이 가능한 프로그래밍 솔루션
- 프로그래머들이 유용하다가 생각되는 경험을 활용하여 객체들간의 일반적인 상호작용 방법들을 모은 목록으로 problem Domain의 최적화된 디자인
----
### 아키텍처 패턴

- 주어진 상황의 소프트웨어 구조에서 발생하는 문제점을 해결하기 위한 일반화된 재사용 가능한 솔루션
- 디자인 패턴보다 큰 범주 (소프트웨어의 전체적인 그림을 만드는 솔루션)
- MVC, Publisher-Subscriber, Client-Server, Master-Slave, P2P 등 있음

----
https://genieker.tistory.com/123

----

<!-- - 디자인 패턴이 실제로 적용 된 것이 프레임워크이고, 이를 바탕으로 실제 운영되는 SW로 구현한 결정체가 바로 아키텍처라고 할 수 있다. 따라서, 모든 핵심 로직은 디자인 패턴을 바탕으로 구현되는 것이라고 할 수 있다. -->
----
## MVC
![](https://t1.daumcdn.net/cfile/tistory/2359D333538D680628)

----

- 컨트롤러
    - 어떻게 할지 정의
    - 모든 데이터, 상태 및 어플리케이션 로직이 들어있음
    - 모델에 명령을 보냄 ⇒ 모델의 상태를 변경
    - 뷰에 명령을 보냄 ⇒ 모델의 표시 방법을 바꿈

----

- 모델
    - 무엇을 할지 정의
    - 상태 변화가 있을 때 컨트롤러와 뷰에 이를 통보
    - 통보를 통해서 뷰는 최신의 결과를 보여줄수 있음
- 뷰
    - 모델에게 질의를 하여 모델로 부터 값을 가져와 사용자에 보여준다

----

## 어떤 패턴을 사용하고 있을까? 
1. **Observer 패턴**
![](https://t1.daumcdn.net/cfile/tistory/26702D4C538D6DEE23)
----
2. **Strategy 패턴**
![reference link](https://t1.daumcdn.net/cfile/tistory/2731B54C538D6DEF2C)
----
3. **Composite 패턴**
![](https://t1.daumcdn.net/cfile/tistory/254E774C538D6DF02C)
----
### MVC 1
![](https://mblogthumb-phinf.pstatic.net/20160906_265/kksssii_1473140482389qapYp_PNG/MVC1.png?type=w2)
- 웹브라우저의 요청을 jsp 페이지가 받아서 처리하는 구조
- 주로 jsp에서 구현
- JSP가 Controller, View 기능 모두 담당 (모든 클라이언트 요청과 응답을 함)
    - Controller ⇒ Java
    - View⇒ HTML, CSS
    - Event⇒ Javascript
- Model은 JDBC 인터페이스로 DB를 조작하며 class를 정의
----
```htmlmixed
    //JSP Controller
    <h2>합 구하기</h2>
    <%
    	...
    	Bean bean = new Bean();
    	bean.getDB();
    	Vector<Bean> v = new Vector<Bean>();
    	v.add(bean);
    %>
    <table border=1>
    	<tr>
    		<th>X</th>
    		<th>Y</th>
    	</tr>
    <% for(Bean b: v){
    	out.println("<tr><td>b.getX()</td><td>b.getY()</td></tr>);
    }
    %>
    </table>
```   
----
```java
//Bean 객체
public class Bean{
    private int x;
    private int y;
    //getter, setter 생략
    public void insertDB(Bean b){
    Connection conn = null;
    Statement stmt = null;
    ...
    stmt.executeUpdate(query);
    
    }
    getDB(){
        ...
        ResultSet rs = null;
        ...
        rs = stmt.executeQuery(query);
        x = rs.getInt("x");
        y = rs.getINt("y");
    }
}
```

----

### 장점
- 구조 단순 (중,소형 프로젝트 적합)
### 단점
- 뷰 코드와 로직 처리 코드가 함께 섞이기 떄문에 코드가 복잡해짐
- 분업이 용이 X (Front, Back이 혼재 되어있음)
- 유지보수 어려움

----

### MVC 2
![](https://mblogthumb-phinf.pstatic.net/20160906_144/kksssii_1473140482632GdHAw_PNG/MVC2.png?type=w2)

----

```Java
package kr.ac.kyonggi.cs.handler.action.community;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

import kr.ac.kyonggi.cs.common.controller.Action;
import kr.ac.kyonggi.cs.handler.dao.setting.ClubDAO;
import kr.ac.kyonggi.cs.handler.dao.setting.HomeDAO;


public class ClubAction implements Action {

   @Override
   public String execute(HttpServletRequest request, HttpServletResponse response) throws Exception {
      Gson gson=new Gson();
      String menu = request.getParameter("num");
      request.setAttribute("club", gson.toJson(ClubDAO.getInstance().getClub()));
      request.setAttribute("tabmenulist", gson.toJson(HomeDAO.getInstance().getTabMenu(menu)));
      request.setAttribute("num", menu);
      return "RequestDispatcher:jsp/page/community_club.jsp";
   }

}
```
----

```java
public class ClubDAO {
	public static ClubDAO it;
	
	public static ClubDAO getInstance() {
		if(it == null)
			it = new ClubDAO();
		return it;
	}
	
	public ArrayList<ClubBean> getClub(){
		List<Map<String, Object>> listOfMaps = null;
		Connection conn = Config.getInstance().sqlLogin();
		try {
			QueryRunner queryRunner = new QueryRunner();
			listOfMaps = queryRunner.query(conn, "SELECT * FROM `club`;", new MapListHandler());
		} catch (SQLException se) {
			se.printStackTrace();
		} finally {
			DbUtils.closeQuietly(conn);
		}
		Gson gson = new Gson();
		ArrayList<ClubBean> selectedList = gson.fromJson(gson.toJson(listOfMaps), new TypeToken<List<ClubBean>>() {}.getType());
		return selectedList;
	}
```
----
#### 장점
- 처리작업의 분리로 인해 유지보수, 확장이 용이
#### 단점
- 구조 설계를 위한 시간이 많이 소요되므로 개발 기간이 증가

----

## 참고사항
#### DAO (data acess object)
- DB에 데이터를 조회하거나 조작하는 기능을 전담

----

## MVC를 사용하는 프레임워크
#### Spring MVC
![](https://i.imgur.com/bvoCjxm.png)

----

#### AngularJS
- 안해봤음ㅠㅠ
![](https://t1.daumcdn.net/cfile/tistory/135D444C508E450C21)
- 이 화면에서는 Controller가 빠져있음
- 모델은 Phone 객체들의 배열로 표현되고 `PhoneListCtrl` 컨트롤러에 의해 제어
- 뷰는 HTML 템플릿을 통해 보여진 결과

----

#### Django (MTV 패턴이라고도 불림 (Model Template View))
- 안해봐서 모르겠습니다..!!! 하신분 있으신가요?
- ![](https://t1.daumcdn.net/cfile/tistory/997ED43E5B4F6E7627)
- 모델(Model)은 
    - 데이터베이스에 저장되는 데이터를 의미
- 템플릿(Template)은 
    - 사용자에게 보여지는 부분
- 뷰(View)
    -  실질적으로 프로그램 로직이 동작하여 데이터를 가져오고 적절하게 가공하여 그 결과를 템플릿에 전달하는 역할을 수행한다. 

----

### MVC의 한계
- 뷰와 모델의 서로 의존성을 띄게 된다!!
    - Controller는 다수의 View를 가짐
    - Model은 Controller에 의해 View와 연결
    - View는 여러개의 Model과 연결이 됨
    - 다수의 Model과 View가 복잡하게 연결될 가능성 매우 높음
- 대규모 프로그램을 개발하게 되면 문제점이 생기게 된다!!!
    - Massive ViewController라고 불리게된다.

----

## 다른 패턴들이 나오게 된다..!!
    - MVP
    - MVVM   

