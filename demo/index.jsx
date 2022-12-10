import React from "react";
import { createRoot } from 'react-dom/client';
import { Pagination, PAGINATION_POSITION } from "../src/index"

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
                <Pagination gap={false} position={PAGINATION_POSITION.CENTER} total={200} itemsPerPage={10} distance={3} current={20}/>
                <br/>
                <br/>
                <br/>
                <Pagination position={PAGINATION_POSITION.LEFT} total={200} itemsPerPage={10} distance={3} current={7}/>
                <Pagination position={PAGINATION_POSITION.CENTER} total={200} itemsPerPage={10} distance={3} current={7}/>
                <Pagination position={PAGINATION_POSITION.RIGHT} total={200} itemsPerPage={10} distance={3} current={7}/>
                <br/>
                <br/>
                <br/>
                <Pagination position={PAGINATION_POSITION.CENTER} total={200} itemsPerPage={10} distance={3} current={7}/>
                <Pagination position={PAGINATION_POSITION.CENTER} rounded total={200} itemsPerPage={10} distance={5} current={15}/>
            </div>
        </>
    )
}

const root = createRoot(document.getElementById('root'))
root.render(<App />, );