import React, { Component } from "react";
import { Hr, DivGeneral } from "../style/div";
import { H1 } from "../style/text";
import { Ul, Li } from "../style/list";
import { IconSnail, IconHome, IconRegister } from "../style/icon";
import { colorLight, fontSize } from "../style/variables";

export default function Menu() {
  return (
    <nav>
      <DivGeneral
        theme={{
          height: "auto",
          width: "230px",
          position: "relative",
          left: "30px",
          background: "trasnparent",
        }}
      >
        <H1 theme={{ color: colorLight.eilish, fontSize: "30px" }}>
          <IconSnail iconColor={colorLight.eilish} right="5px" />
          Natilus Zone
        </H1>
      </DivGeneral>
      <DivGeneral theme={{ width: "auto", height: "300px" }}>
        <Ul>
          <Li
            theme={{
              textaling: "left",
              width: "200px",
              fontSize: fontSize.medium,
              hover: colorLight.eilish,
              color: colorLight.gray,
              left: "15px",
              weight: "600",
            }}
          >
            <IconHome
              color={colorLight.gray}
              right="5px"
              hover={colorLight.eilish}
            />
            Inicio
          </Li>

          <Li
            theme={{
              textaling: "left",
              width: "200px",
              fontSize: fontSize.medium,
              hover: colorLight.eilish,
              color: colorLight.gray,
              left: "15px",
              weight: "600",
            }}
          >
            <IconRegister
              color={colorLight.gray}
              right="5px"
              hover={colorLight.eilish}
              top="2px"
            />
            Registro de especie
          </Li>
        </Ul>
      </DivGeneral>
      <Hr />
      <div>
        <lavel>photo/username</lavel>
      </div>
    </nav>
  );
}
