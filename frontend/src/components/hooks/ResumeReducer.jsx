const resumeReducer = (state, action) => {
    
    switch(action.type){
        case 'PERSONAL_DETAILS':
            console.log('Reducer Update:', action.payload);
            return {
                ...state,
                personalDetails: {
                    ...state.personalDetails,[action.payload.name]: action.payload.value
                }
            };

        case 'ADD_SKILL':
            return {
                ...state, 
                skills: [...state.skills, '']
            }
        case 'REMOVE_SKILL':
            if (!state.skills || state.skills.length === 0) return state;
            return {
                ...state,
                skills: state.skills.filter((_, id) => id !== action.payload)
            }
        case 'UPDATE_SKILL':
            return{
                ...state,
                skills: state.skills.map((skill,id) => (id === action.payload.index ? action.payload.value : skill))
            }
        case 'ADD_EDUCATIONS':
            return{
                ...state,
                education:[
                    ...state.education, {
                        institution:'', degree:'', fieldofStudy:'', graduateDate:''
                    }
                ]
            }
        case 'REMOVE_EDUCATIONS':
            return {
                ...state,
                education: state.education.filter((_, id) => id !== action.payload)
            }
        case 'UPDATE_EDUCATIONS':
            return{
                ...state,
                education:state.education.map((edu,id) => id === action.payload.index ? {...edu, [action.payload.field]: action.payload.value} : edu )
            }

        case 'ADD_WORK_EXPERIENCE':
            console.log('Reducer Update:', action.payload);
            return{
                ...state,
                workExperinence: [
                    ...state.workExperinence, {
                        jobTitle:'', company:'', location:'', startDate:'', endDate:'',description:''
                    }
                ]
            }
        case 'REMOVE_WORK_EXPERIENCE':
            return {
                ...state,
                workExperinence: state.workExperinence.filter((_, id) => id !== action.payload)
            }
        case 'UPDATE_WORK_EXPERIENCE':
            console.log('Reducer Update:', action.payload);
            return {
                ...state,
                workExperinence: state.workExperinence.map((experience, id) =>
                id === action.payload.index ? { ...experience, [action.payload.field]: action.payload.value } : experience
                ),
            };
        case 'ADD_CERTIFICATE':
            return{
                ...state,
                certifications:[
                    ...state.certifications, ''
                ]
            }
        case "REMOVE_CERTIFICATE":
            return{
                ...state,
                certifications: state.certifications.filter((_, id) => id !== action.payload)
            }
        case 'UPDATE_CERTIFICATE':
            return {
                ...state,
                certifications: state.certifications.map((cert, id) => (id === action.payload.index ? action.payload.value : cert)),
            };

        // Inside your reducer (ResumeReducer.jsx)
        case 'RESET_FORM':
            return {
            personalDetails: {
                name: '',
                email: '',
                phone: '',
                address: '',
                github: '',
                linkedin: '',
                summary: '',
            },
            skills: [''],
            education: [{ institution: '', degree: '', fieldofStudy: '', graduateDate: '' }],
            workExperinence: [{ jobTitle: '', company: '', location: '', startDate: '', endDate: '' }],
            certifications: [''],
            };

        
        default:
            return state;
    }
}

export default resumeReducer;