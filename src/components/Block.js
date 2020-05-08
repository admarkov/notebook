import React from "react"

import BlockHeader from "./BlockHeader";

export class Block extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="block">
            <BlockHeader><i className="fas fa-code"></i> Code</BlockHeader>
                {this.props.children}
            </div>
        );
    }

}

export function AddBlock(props) {
    return (
      <div className="addBlockBtn">
          <i className="fas fa-plus"></i>&nbsp;&nbsp;Add block
      </div>
    );
}