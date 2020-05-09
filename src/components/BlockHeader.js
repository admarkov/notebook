import React from "react"

export default function BlockHeader(props) {
    return (
      <div className="blockHeader">
          <h2 className="blockType">{props.children}</h2>
          <i className="blockMenuButton fas fa-ellipsis-h"></i>
      </div>
    );
}