// @ts-ignore
import { Avatar, Card, CardContent, CardHeader, Typography } from "@material-ui/core";
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
// @ts-ignore
import ReactDOMServer from 'react-dom/server';
import { ForceGraph3D, ForceGraph2D, ForceGraphVR } from 'react-force-graph';
import './App.css';
import data, { Jisep2020 } from './data';
import Graph from "./graphV2";
import { normalizedData } from "./phoenix_data";
// @ts-ignore
import { CSS2DObject, CSS2DRenderer } from './renderer';
import DATA from './d7.json';
import { REPO_TOKEN } from "./graph";
import DocumentRenderer from "./renderers/DocumentRenderer";
import StudentRenderer from "./renderers/StudentRenderer";
import MemberRenderer from "./renderers/MemberRenderer";
import MissionRenderer from "./renderers/MissionRenderer";
import ValidationRenderer from "./renderers/Validation";
import DocumentTypeRenderer from "./renderers/DocumentTypeRenderer";
import ValidationTypeRenderer from "./renderers/ValidationTypeRenderer";

function JSXTo2D(elem: JSX.Element) {
  const nodeEl = document.createElement('div');
  nodeEl.innerHTML = ReactDOMServer.renderToStaticMarkup(elem);
  return new CSS2DObject(nodeEl);
}

function JSXToString(elem: JSX.Element) {
  return ReactDOMServer.renderToStaticMarkup(elem);
}

const extraRenderers = [new CSS2DRenderer()];

const phoenixRules = {
  // member: {
  //   student: "combine"
  // },
  mission: {
    missionOrigins: "combine"
  }
};

const e = { ...DATA };
const g = Graph.of(e.objects, phoenixRules);


const getHoverRenderer = (data: any) => {
  switch (data[REPO_TOKEN]) {
    case "document":
      return <DocumentRenderer document={data} />;
    case "student":
      return <StudentRenderer student={data} />;
    case "member":
      return <MemberRenderer member={data} />;
    case "mission":
      return <MissionRenderer mission={data} />;
    case "validation":
      return <ValidationRenderer validation={data} />;
    case "docType":
      return <DocumentTypeRenderer documentType={data} />;
    case "validationType":
      return <ValidationTypeRenderer validationType={data} />
    default:
      return undefined;
  }
}

function useKeyPressEvent(fun: (e: KeyboardEvent) => void) {
  useEffect(() => {
    const l = (e: KeyboardEvent) => {
      fun(e);
    }
    window.addEventListener('keypress', l);
    return () => {
      window.removeEventListener('keypress', l);
    }
  }, [fun]);
}

function App() {
  const d = g.getData();
  console.log(d);
  const missionName = "Battistelli 6";
  const [orbit, setOrbit] = useState(true);
  const fgRef = useRef();
  const distance = 500;
  const toggleOrbit = useCallback((e: KeyboardEvent) => {
    if (e.code === "Space") {
      setOrbit(o => !o);
    }
  }, []);
  useKeyPressEvent(toggleOrbit);

  useEffect(() => {
    if (orbit) {
      // @ts-ignore
      fgRef.current!.cameraPosition({ z: distance });

      // camera orbit
      let angle = 0;
      const i = setInterval(() => {
        // @ts-ignore
        fgRef.current!.cameraPosition({
          x: distance * Math.sin(angle),
          z: distance * Math.cos(angle)
        });
        angle += Math.PI / 300;
      }, 20);
      return () => clearInterval(i);
    }
  }, [orbit]);

  return (
    <div>
      {/* <Typography variant="h1" >
        {missionName}
      </Typography> */}
      <ForceGraph3D
        ref={fgRef}
        // @ts-ignore
        extraRenderers={extraRenderers}
        nodeLabel={d => {
          // @ts-ignore
          const data = d.data;
          const comp = getHoverRenderer(data);
          if (comp) {
            return JSXToString(comp);
          }
          try {
            return JSON.stringify(data);
          } catch (e) {
            return "circular data";
          }
        }}
        graphData={d}
        nodeAutoColorBy="group"
        //@ts-ignore
        // nodeThreeObject={(node: any) => {
        //   // console.log(node);
        //   return JSXTo2D(
        //     <div style={{ color: node.color }} >
        //       <Avatar
        //         src={node.data.img}
        //       >
        //         {node.id}
        //       </Avatar>
        //     </div>
        //   )
        // }}
        nodeThreeObjectExtend={true}
      />
    </div>
  );
}

export default App;
