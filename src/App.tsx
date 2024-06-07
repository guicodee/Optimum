import { Cars } from "./components/Cars";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Container } from "./styles/styles";

export default function App() {

  return (
    <>
      <Header />
      <Hero />
      <Container>
        <Cars />
        <Cars />
        <Cars />
        <Cars />
      </Container>
    </>
  )
}
