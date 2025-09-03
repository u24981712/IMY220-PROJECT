import React from "react"

const Messages = ({ messages }) => {
    return (
        <>
            <p className="ProjectMessage">{messages.message}</p>
            <p className="ProjectEditor">{messages.editor}</p>
            <p className="ProjectEditDate">{messages.dateEditted}</p>

        </>
    )
}

export default Messages;