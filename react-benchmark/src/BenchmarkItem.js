import React from 'react';

const BenchmarkItem = ({num}) => <div style={{
    backgroundColor: `#${(num * 5 % 256).toString(16)}${(num * 11 % 256).toString(16)}${(num * 13 % 256).toString(16)}`
}}>{num}</div>

export default BenchmarkItem;
