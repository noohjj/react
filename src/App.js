import Header from "./components/ex01/Header";
import Section from "./components/ex01/Section";
import Footer from "./components/ex01/Footer";
import { Menus, Menus_1 } from "./components/ex01/Menus";

const App = () => {
  return (
    <>
      {/* <Header></Header>
      <Section></Section>
      <Footer></Footer> */}

      <Menus></Menus>
      <Menus_1></Menus_1>
    </>
  );
};

export default App;

// *jsx 문법 규칙 :
// => 태그에 부모가 반드시 존재해야 함!
