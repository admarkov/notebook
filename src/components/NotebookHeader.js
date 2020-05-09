import React from "react"

export default class NotebookHeader extends React.Component {
    constructor(props) {
        super(props)
        this.onNameChanged = this.onNameChanged.bind(this)
        this.state = {
            connectionStatus: {
                "text": "connected",
                "color": "green"
            },
            notebookName: this.props.name
        }
    }

    onNameChanged(e) {
        if (e.key === "Enter") {
            e.preventDefault()
            document.activeElement.blur()
            return
        }
    }

    render() {
        return (
          <div className="notebookHeader">
              <h1 onKeyDown={this.onNameChanged} contentEditable={true}>{this.state.notebookName}</h1>
              <span className="connectionStatus">{this.state.connectionStatus.text}&nbsp;<i className="connectionIcon fas fa-circle" style={{color: this.state.connectionStatus.color}}></i></span>
          </div>
        );
    }
}