export default function addContact(name,email){
    return({
        type:"AddContact",
        paylode:{
            id: new Date().getTime().toString(),
            name,
            email
        }
    })
};

export function delContact(id){
    return({
        type:"DelContact",
        paylode:{
            id
        }
    })
};

// export function retrive(contactList){
//     return({
//         type:"Retrive",
//         paylode:{
//             contactList
//         }
//     })
// };