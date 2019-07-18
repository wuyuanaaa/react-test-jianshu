import styled from 'styled-components'

export const LoginWrapper = styled.div`
  position: absolute;
  top: 56px;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #f1f1f1;
  z-index: 1;
  text-align: center;
  &::before {
    content: "";
    display: inline-block;
    height: 85%;
    vertical-align: middle;
  }
`
export const LoginInner = styled.div`
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  margin: auto;
  padding: 40px;
  width: 400px;
  height: 300px;
  border-radius: 4px;
  box-shadow: 0 0 8px rgba(0,0,0,.1);
  background-color: #fff;
  .input {
    margin-bottom: 20px;
    box-sizing: border-box;
    padding-left: 10px;
    width: 300px;
    height: 30px;
    border: 1px solid #c8c8c8;
    border-radius: 4px;
  }
  .btn {
    margin-top: 20px;
    width: 300px;
    padding: 9px 18px;
    font-size: 18px;
    border: none;
    border-radius: 25px;
    color: #fff;
    background: #42c02e;
    cursor: pointer;
    outline: none;
    clear: both;
  }
`