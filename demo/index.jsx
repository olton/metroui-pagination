import React from "react";
import { createRoot } from 'react-dom/client';
import {Pagination, PAGINATION_POSITION, PAGINATION_SIZE, PAGINATION_VARIANT} from "../src/index"

import "./index.less"

const App = () => {
    return (
        <>
            <div className="button-container" style={{flexFlow: "column"}}>
                <h1>Metro UI/Pagination</h1>
                <h2>For React</h2>
                <p>Copyright 2022 by <a href="https://Korzh.com">Korzh.com</a></p>
            </div>
            <br/>
            <br/>
            <div className="button-container">
                <Pagination position={PAGINATION_POSITION.CENTER} total={200} itemsPerPage={10} distance={3} current={1}/>
                <Pagination position={PAGINATION_POSITION.CENTER} total={200} itemsPerPage={10} distance={3} current={10}/>
                <Pagination position={PAGINATION_POSITION.CENTER} total={200} itemsPerPage={10} distance={3} current={20}/>
                <br/>
                <br/>
                <br/>
                <h2>No gap</h2>
                <Pagination gap={false} position={PAGINATION_POSITION.CENTER} total={200} itemsPerPage={10} distance={3} current={10}/>
                <br/>
                <br/>
                <br/>
                <h2>Position</h2>
                <Pagination position={PAGINATION_POSITION.LEFT} total={200} itemsPerPage={10} distance={3} current={7}/>
                <Pagination position={PAGINATION_POSITION.CENTER} total={200} itemsPerPage={10} distance={3} current={7}/>
                <Pagination position={PAGINATION_POSITION.RIGHT} total={200} itemsPerPage={10} distance={3} current={7}/>
                <br/>
                <br/>
                <br/>
                <h2>Size</h2>
                <Pagination size={PAGINATION_SIZE.SMALL} position={PAGINATION_POSITION.CENTER} total={200} itemsPerPage={10} distance={3} current={7}/>
                <Pagination size={PAGINATION_SIZE.DEFAULT} position={PAGINATION_POSITION.CENTER} total={200} itemsPerPage={10} distance={3} current={7}/>
                <Pagination size={PAGINATION_SIZE.LARGE} position={PAGINATION_POSITION.CENTER} total={200} itemsPerPage={10} distance={3} current={7}/>
                <br/>
                <br/>
                <br/>
                <h2>Rounded</h2>
                <Pagination position={PAGINATION_POSITION.CENTER} rounded total={200} itemsPerPage={10} distance={5} current={15}/>
                <br/>
                <br/>
                <br/>
                <h2>Colors</h2>
                <Pagination variant={PAGINATION_VARIANT.PRIMARY} position={PAGINATION_POSITION.CENTER} total={200} itemsPerPage={10} distance={3} current={15}/>
                <Pagination variant={PAGINATION_VARIANT.SECONDARY} position={PAGINATION_POSITION.CENTER} total={200} itemsPerPage={10} distance={3} current={15}/>
                <Pagination variant={PAGINATION_VARIANT.DANGER} position={PAGINATION_POSITION.CENTER} total={200} itemsPerPage={10} distance={3} current={15}/>
                <Pagination variant={PAGINATION_VARIANT.WARNING} position={PAGINATION_POSITION.CENTER} total={200} itemsPerPage={10} distance={3} current={15}/>
                <Pagination variant={PAGINATION_VARIANT.SUCCESS} position={PAGINATION_POSITION.CENTER} total={200} itemsPerPage={10} distance={3} current={15}/>
            </div>
        </>
    )
}

const root = createRoot(document.getElementById('root'))
root.render(<App />, );