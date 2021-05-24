import Shape from "./shape";
import React, { Component } from "react";
class Circle extends Shape {
constructor(props) {
super(props);

}
calculateArea() {
return "Arrea";
}
render() {
return <div>{this.calculateArea()}</div>;
}
}
export default Circle;