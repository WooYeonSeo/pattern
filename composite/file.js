class Node {
  constructor() {}
  display() {}
}

class File extends Node {
  constructor(name) {
    super();
    this.name = name;
  }
}

class Directory extends Node {
  constructor(name) {
    super();
    this.name = name;
    this.files = [];
  }
  add(file) {
    this.files.push(file);
  }
}

directoryOne = new Directory("Directory One");
directoryTwo = new Directory("Directory Two");
directoryThree = new Directory("Directory Three");

fileOne = new File("File One");
fileTwo = new File("File Two");
fileThree = new File("File Three");

directoryOne.add(fileOne);
directoryOne.add(fileTwo);
directoryOne.add(directoryTwo);
directoryTwo.add(directoryThree);
directoryThree.add(fileThree);

directoryOne.display();

/*
Directory One
File One
File Two
Directory Two
Directory Three
File Three
*/

//파일 실행 시 위와 같이 파일 계층에 따라 로그가 찍히도록 코드를 완성해보세요
