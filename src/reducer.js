export const initialState = {
    children: [],
    states: [{
        "_id": "60fd2bba397ead0a8472c104",
        "state_name": "Delhi",
        "state_id": "1"
    },
    {
        "_id": "60fd2fde4ad3995f4cd47b04",
        "state_name": "Rajasthan",
        "state_id": "2"
    },
    {
        "_id": "611111954ad3995f4cd47b3f",
        "state_name": "Gujgrat",
        "state_id": "5"
    }
],
    districts: [
        {
            "id": "1",
            "name": "Bodh Gaya",
            "stateName": "Bihar"
        },
        {
            "id": "2",
            "name": "Mau",
            "stateName": "Uttar Pradesh"
        },
        {
            "id": "3",
            "name": "Varanasi",
            "stateName": "Uttar Pradesh"
        },
    ],
    user: null,
    children: [{
        "_id": "60fd30144ad3995f4cd47b10",
        "name": "Ram Kumar",
        "sex": "Male",
        "dob": "2011-06-15",
        "father_name": "Rajesh Kumar",
        "mother_name": "Rajni",
        "district_id": "60fd1f1683fe721470a5da82",
        "photo": "'https://prework-backend.s3.ap-south-1.amazonaws.com/child1.jpeg'"
    },
    {
        "_id": "60fd30464ad3995f4cd47b12",
        "name": "Rajesh Khanna",
        "sex": "Male",
        "dob": "2010-06-15",
        "father_name": "prayag Khanna",
        "mother_name": "niharika Khanna",
        "district_id": "60fd1f1683fe721470a5da82",
        "photo": "'https://prework-backend.s3.ap-south-1.amazonaws.com/child2.jpeg'"
    },
    {
        "_id": "6111005e4ad3995f4cd47b19",
        "name": "Rajesh Khanna",
        "sex": "Male",
        "dob": "2010-06-15",
        "father_name": "prayag Khanna",
        "mother_name": "niharika Khanna",
        "district_id": "60fd1f1683fe721470a5da82",
        "photo": "https://prework-backend.s3.ap-south-1.amazonaws.com/child2.jpeg"
    },
    {
        "_id": "61111e534ad3995f4cd47b62",
        "name": "jkdjkjk",
        "sex": "Male",
        "dob": "2000-01-01",
        "father_name": "jfkhkjk",
        "mother_name": "kjfkhjk",
        "district_id": "79",
        "photo": ""
    },
    {
        "_id": "611164484ad3995f4cd47b80",
        "name": "jhjkhkjh",
        "sex": "Male",
        "dob": "2000-01-01",
        "father_name": "jkhkjhkj",
        "mother_name": "klhkjhgj",
        "district_id": "789",
        "photo": ""
    },
]
};

const reducer = (state, action) => {

    switch(action.type) {
        case 'ADD_STATE':
            return {
                ...state,
                states: [...state.states, action.payload],
            };
        case 'ADD_DISTRICT':
            return {
                ...state,
                districts: [...state.districts, action.payload],
            };
        case 'ADD_CHILD':
            return {
                ...state,
                districts: [...state.districts, action.payload],
            };
            
        default:
                return state;
    }
}


export default reducer;