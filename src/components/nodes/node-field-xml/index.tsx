import * as React from "react";
import { removeNodeAtPath } from "react-sortable-tree";
import NodeWrapper from "../../../components/nodes/node-wrapper";
import { getNodeKey } from "../../../helpers";
import { INodeProps } from "../../../types";
import "./node-field-xml.css";
import SDCamlField from "../../../components/sd-caml-field";
import SDToggle from "../../../components/sd-toggle";

export  function NodeFieldXML(props: INodeProps) {
  var { path, treeData, setTreeAndScriptData } = props;
  var actionProps = {
    iconProps: {
      iconName: "Delete"
    },
    onClick: () =>
      setTreeAndScriptData(removeNodeAtPath({ treeData, path, getNodeKey })),
    title: "Remove the field"
  };

  return (
    <NodeWrapper actionProps={actionProps} smallTitle="XML Field" infoText="Enables defining fields and their elements using Collaborative Application Markup Language (CAML).">
      <div className="sd_site_hierarchy_node_field_xml">
      <div className="sd_row">
          <SDToggle
            {...props}
            label="Add to default view"
            fieldName="addToDefaultView"
            infoText={"True if the field will be added to the default view; otherwise, false."}
          />
        </div>
        <div className="sd_row">
          <SDCamlField {...props} label="XML" fieldName="schemaXml" infoText={"Enables defining fields and their elements using Collaborative Application Markup Language (CAML). Note that providing the ID attribute in the field schemaXml is very important in order to prevent the field from being created multiple times if the script is run more than once."}/>
        </div>
      </div>
    </NodeWrapper>
  );
}
