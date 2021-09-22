import React, { useEffect, useState } from 'react'
import { BewariesColumnCards } from '../../components/BewariesColumnCards/BewariesColumnCards'
import { BewariesPagination } from '../../components/BewariesPagination/BewariesPagination'
import { berrawies } from '../../hooks/useBewaries'
import { states } from '../../hooks/useStatesOfUsa'
import { BewariesSkeleton } from '../../components/BewariesSkeleton/BewariesSkeleton'
import { DropDownStates } from '../../components/DropdownStates/DropDownStates'
import styles from './ListStoresPage.module.css'


const ListStoresPage = () => {
    const [data, setData] = useState()
    const item = 9
    const [defaultActivePage, setDefaultActivePage] = useState(1)
    const [totalPages, setTotalPages] = useState(2)
    const [selectedOption, setSelectedOption] = useState();
    const [dataStates, setDataStates] = useState()

    useEffect(() => {
        setDataStates(states())
    }, [])
    useEffect(() => {
        berrawies(1, item, 'asc', selectedOption).then(response => setData(response))
        setTotalPages(2)

    }, [selectedOption])


    const onClick = async (e, pageInfo) => {
    
        setDefaultActivePage(pageInfo.activePage)
        const dataSource = await berrawies(pageInfo.activePage, item, 'asc', selectedOption)
        if (dataSource.length === item && totalPages === pageInfo.activePage)
            setTotalPages(totalPages + Math.ceil((dataSource.length) / item))
        setData(dataSource)
    }


    const drawData = () => {
        if (data === undefined) {
            return (<div className={styles.SkeletonListStores}> {[...Array(item)].map((e, i) => <BewariesSkeleton key={i}/>)}</div>)
        }
        else {
            return (
                <>
                    <BewariesColumnCards
                        data={data}
                    ></BewariesColumnCards>

                    <BewariesPagination
                        defaultActivePage={defaultActivePage}
                        totalPages={Math.ceil(totalPages)}
                        onClick={onClick}
                    />
                </>
            )
        }
    }

    return (
        <div>
            <div className={styles.FilterState}>
                <DropDownStates stateList={dataStates}
                    setSelectedOption={setSelectedOption}
                />
            </div>
            {drawData()}
        </div >

    );
};

export default ListStoresPage;
