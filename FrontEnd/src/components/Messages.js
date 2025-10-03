import React from "react"

const Messages = ({ messages }) => {
    return (
        <>
            <p className="ProjectMessage">{messages.message}</p>
            <p className="ProjectEditor">{messages.uploadedBy}</p>
            <p className="ProjectEditDate">{messages.date}</p>

        </>
    )
}

export default Messages;