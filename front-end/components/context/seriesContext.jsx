import react, {createContext, useContext, useEffect, useMemo, useState} from 'react';
import axios from "axios";

export const SeriesContext = createContext();

export const SeriesProvider = (props) => {
    const [currentSeries, setCurrentSeries] = useState(null);

    const onChangeCurrentSeries = (series) => setCurrentSeries(series);

    const value = useMemo(() => ({
        onChangeCurrentSeries,
        currentSeries
    }), [currentSeries]);


    return (
        <SeriesContext.Provider value={value}>
            {props.children}
        </SeriesContext.Provider>
    );
}

export const useSeriesContext = () => {
    return useContext(SeriesContext);
}
