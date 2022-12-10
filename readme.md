# Metro UI Pagination for React

## Install
```shell
npm i -S @metroui/pagination
```

## Using
```typescript
import React from "react";
import { createRoot } from 'react-dom/client';
import { Pagination, PAGINATION_POSITION } from "../src/index"

import "./index.less"

const App = () => {
    return (
        <>
            <Pagination 
                position={PAGINATION_POSITION.CENTER} 
                total={200} 
                itemsPerPage={10} 
                distance={3} 
                current={1}/>
        </>
    )
}

const root = createRoot(document.getElementById('root'))
root.render(<App />, );
```