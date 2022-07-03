import React from "react";

// Declarate Variable
class NoteAdd extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            note: {title: '', body: ''},
            titleTextLimit: {inputTitle: '', textLimit: 50, charLimit: 50 }
        }

        this.onTitleChangeEvent = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEvent = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEvent = this.onSubmitEventHandler.bind(this);
    }

    // Title Event Handler
    onTitleChangeEventHandler(event) {
        if (event.target.value.length <= 50) {
            this.setState((state) => {
                return {
                    titleTextLimit: {
                        ...state.titleTextLimit,
                        inputTitle: event.target.value,
                        charLimit: state.titleTextLimit.limit - event.target.value.length
                    },
                    note: { ...state.note, title: event.target.value
                    }
                }
            })
        }
    }

    // Body Event Handler
    onBodyChangeEventHandler(event) {
        this.setState((state) => {
            return {
                ...state,
                note: {
                    ...state.note,
                    body: event.target.value
                }
            }
        })
    }

    // Submit Event Handler
    onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.NoteAdd(this.state.note);
        this.setState((state) => {
            return {
                note: {title: '', body: ''},
                titleTextLimit: {
                    ...state.titleTextLimit,
                    inputTitle: '',
                    charLimit: 50
                }
            }
        })
    }

    render() {
        return (
            <div className="note-input">
                <h2>Create a Note</h2>
                <form onSubmit={this.onSubmitEventHandler}>
                    <p className={`note-input__title__limit ${this.state.titleTextLimit.charLimit === 0? 'zero' : ''}`}>Character Remaining: </p>
                    <input className="note-input__title" type='text' value={this.state.note.title} onChange={this.onTitleChangeEventHandler} placeholder='Create a note title' required />
                    <textarea className="note-input__body" type='text' value={this.state.note.body} onChange={this.onBodyChangeEventHandler} placeholder='Write your note here...' required />
                    <button type="submit">Create</button>
                </form>
            </div>
        )
    }
}

// Export Function
export default NoteAdd;