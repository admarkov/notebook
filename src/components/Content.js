import React from "react"

import {Block, AddBlock} from './Block'
import NotebookHeader from "./NotebookHeader";

export default function Content(props) {
    const delim = <hr style={{margin: "0 auto", width: "90%"}} />
    const code = "int get(int v, int c) {\n" +
        "    int min = INT_MAX;\n" +
        "    if (distcols[v].find(c) != distcols[v].end()) {\n" +
        "        min = distcols[v][c];\n" +
        "    }\n" +
        "    if (cols[v] == c)\n" +
        "        return 0;\n" +
        "    int parentino = parent[v];\n" +
        "    while (parentino != -1) {\n" +
        "        if (distcols[parentino].find(c) != distcols[parentino].end()) {\n" +
        "            if (min > distcols[parentino][c] + dist[parentino][v]) {\n" +
        "                min = distcols[parentino][c] + dist[parentino][v];\n" +
        "            }\n" +
        "        }\n" +
        "        parentino = parent[parentino];\n" +
        "    }\n" +
        "    if (min == INT_MAX)\n" +
        "        return -1;\n" +
        "    else distcols[v][c] = min;\n" +
        "    return min;\n" +
        "}"
    return (
        <div className="content">
            <NotebookHeader name="Notebook nammee" />
            <Block>
                <pre>
                    {code}
                </pre>
            </Block>
            {delim}
            <Block>
                some block content
                <br />
                else some block content
            </Block>
            {delim}
            <AddBlock />
        </div>
    );
}