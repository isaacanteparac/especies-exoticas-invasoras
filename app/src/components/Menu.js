import React, { Component } from "react";
import { DivMenu, Hr, DivGeneral } from "../style/div";
import { H1} from "../style/text";
import { Ul, Li } from "../style/list";
import { Svg } from "../style/icon";
import { colorLight, fontSize } from "../style/variables";

export default function Menu() {
  return (
    <DivMenu theme={{ color: colorLight.grayL, background: colorLight.white }}>
      <nav>
        <div>
          <H1 theme={{ color: colorLight.eilish, fontSize: "30px" }}>
            {" "}
            <Svg
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fill-rule="evenodd"
              clip-rule="evenodd"
              theme={{ color: colorLight.eilish, right: "10px" }}
            >
              <path
                fill="currentcolor"
                d="M11.954 11c3.33 0 7.057 6.123 7.632 8.716.575 2.594-.996 4.729-3.484 4.112-1.092-.271-3.252-1.307-4.102-1.291-.925.016-2.379.836-3.587 1.252-2.657.916-4.717-1.283-4.01-4.073.774-3.051 4.48-8.716 7.551-8.716zm10.793-4.39c1.188.539 1.629 2.82.894 5.27-.704 2.341-2.33 3.806-4.556 2.796-1.931-.877-2.158-3.178-.894-5.27 1.274-2.107 3.367-3.336 4.556-2.796zm-21.968.706c-1.044.729-1.06 2.996.082 5.215 1.092 2.12 2.913 3.236 4.868 1.87 1.696-1.185 1.504-3.433-.082-5.215-1.596-1.793-3.824-2.599-4.868-1.87zm15.643-7.292c1.323.251 2.321 2.428 2.182 5.062-.134 2.517-1.405 4.382-3.882 3.912-2.149-.407-2.938-2.657-2.181-5.061.761-2.421 2.559-4.164 3.881-3.913zm-10.295.058c-1.268.451-1.92 2.756-1.377 5.337.519 2.467 2.062 4.114 4.437 3.269 2.06-.732 2.494-3.077 1.377-5.336-1.125-2.276-3.169-3.721-4.437-3.27z"
              />
            </Svg>
            Natilus Zone
          </H1>
        </div>
        <DivGeneral theme={{width:"auto", height: "300px"}}>
          <Ul>
            <Li
              theme={{
                textaling: "left",
                width: "200px",
                fontSize: fontSize.medium,
                hover: colorLight.eilish,
                color: colorLight.gray,
                left: "30px",
                weight: "600"
              }}
            >
              Inicio
            </Li>

            <Li theme={{
              textaling: "left",
              width: "200px",
              fontSize: fontSize.medium,
              hover: colorLight.eilish,
              color: colorLight.gray,
              left: "30px",
              weight: "600"
              }}>
              Registro de especie
            </Li>
          </Ul>
        </DivGeneral>
        <Hr/>
        <div>
          <lavel>photo/username</lavel>
        </div>
      </nav>
    </DivMenu>
  );
}
