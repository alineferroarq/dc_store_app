import React from "react";
import { Col, Container, Navbar, Row } from "react-bootstrap";
import logo from "../../src/assets/logo/logo.png";
import carrinho2 from '../../src/assets/icon/carrinho2.jpg';

import { InputSearch } from "../inputSearch/InputSearch";
import "./MenuBar.css"
import { Menu } from "../menu/menu";
import { ButtonTemplate } from "../../src/button";



export const MenuBar = () => {
  return (
    <div>
      <Container>
        <Navbar /* className="bg-body-tertiary"  */ style={{ paddingTop: '2em', paddingBottom: '2em' }}>
          <Col md={12}>
            <Row>
              <Col md={2}>
                <a class="logo-titulo  text-decoration-none d-flex" href="/">
                  <img src={logo} alt="" class="styles_imagemLogo__9LaY3" />
                  <div class="titulo"></div>
                </a>
                {/* <Navbar.Brand href="/home" as={Col}>
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            <div className="titulo">Digital Store</div>
          </Navbar.Brand> */}
              </Col>
              <Col md={6}>
                <InputSearch />
              </Col>
              <Col md={3}>
                <a href="/cadastro" className="cadastrese mr-2">Cadastre-se</a>
                <ButtonTemplate nome='Entrar' />
              </Col>
              <Col md={1} className="d-flex justify-content-end">
                <img src={carrinho2} height='55%' alt="" class="styles_imagemLogo__9LaY3" />
              </Col>
            </Row>
          </Col>
        </Navbar>
        <Col md={12} style={{ marginBottom: '2em' }}>
          <Menu />
        </Col>
      </Container>
    </div >
  );
};