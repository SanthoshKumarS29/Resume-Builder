import React from "react"

export const Printcomponent = React.forwardRef((props, ref) => (
    <div>
        <h1>Print this conntenct</h1>
        <p>This is the content</p>
    </div>
))