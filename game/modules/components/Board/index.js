import React from 'react'
import css from './styles.css'
import Title from 'react-title-component'
import HexagonBoard from './HexagonBoard';

export default React.createClass({
  render() {
    return (
      <div>
        <Title render={prev => `${prev} | Game board - Cardeon`}/>
        <h2 className={css.header}>Game board</h2>
        <HexagonBoard height={8} width={8} />
      </div>
    )
  }
})
