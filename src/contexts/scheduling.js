import React, {createContext, useState} from 'react';

export const SchedulingContext = createContext({});

function SchedulingProvider({children}){

    const [patient, setPatient] = useState({});
    const [medicalSpecialty, setMedicalSpecialty] = useState("");
    const [dateScheduling, setDateScheduling] = useState(null);

    function savePatientData(patient){
        setPatient(patient);
    }

    function saveMedicalSpecialty(medicalSpecialty){
        setMedicalSpecialty(medicalSpecialty);
    }

    function saveDateScheduling(dateScheduling){
        setDateScheduling(dateScheduling);
    }

    return(
        <SchedulingContext.Provider value={{savePatientData, saveMedicalSpecialty, 
                                                        saveDateScheduling, scheduling: {...patient, medicalSpecialty, dateScheduling}}}>
            {children}
        </SchedulingContext.Provider>
    );
}

export default SchedulingProvider;