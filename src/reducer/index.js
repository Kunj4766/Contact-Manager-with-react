const initialstate = {
    contact: []
}

export default function contactCrud(state = initialstate, action) {
    switch (action.type) {
        case "AddContact":
            const { id, name, email } = action.paylode;
            return {
                ...state,
                contact: [
                    ...state.contact,
                    {
                        id,
                        name,
                        email
                    }
                ]
            }
        case "DelContact":
            const newContact = state.contact.filter(e => e.id!==action.paylode.id)
            return {
                ...state,
                contact:newContact
            }
        // case "Retrive":
        //     const { contactList } = action.paylode;
        //     return {
        //         ...state,
        //         contact:contactList
        //     }
        default:
            return state;
    }
}