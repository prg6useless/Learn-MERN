# Hooks

## useState

## useEffect

- To handle side effects

1. No dependency passed:
    - useEffect(()=>{
        // runs on every render
    });

    - for timers

2. An empty Array
    - useEffect(()=>{
        // runs only on first render
    },[]);

    - fetching data

3. A dependency Array
    - useEffect(()=>{
        // runs on the first render
        // runs when the value in dependency array changes
    },[prop,state]);