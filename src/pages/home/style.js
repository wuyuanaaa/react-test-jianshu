import styled from 'styled-components';


export const HomeWrapper = styled.div`
  overflow: hidden;
  width: 960px;
  margin: 0 auto;
`;

export const HomeLeft = styled.div`
  float: left;
  margin-left: 15px;
  padding-top: 30px;
  width: 625px;
  .banner-img {
    width: 625px;
    height: 270px;
  }
`;

export const HomeRight = styled.div`
  float: right;
  padding-top: 28px;
  width: 280px;
`;

export const BackTop = styled.div`
  position: fixed;
  bottom: 40px;
  right: 40px;
  width: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  border: 1px solid #dcdcdc;
`;


// topic
export const TopicWrapper = styled.div`
  padding: 20px 0 10px;
  overflow: hidden;
  margin-left: -18px;
  border-bottom: 1px solid #dcdcdc;
`;  

export const TopicItem = styled.div`
  float: left;
  padding-right: 10px;
  margin-left: 18px;
  margin-bottom: 18px;
  height: 32px;
  line-height: 32px;
  background: #f7f7f7;
  font-size: 14px;
  color: #000;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  cursor: pointer;
  .item-icon {
    display: block;
    margin-right: 10px;
    float: left;
    width: 32px;
    height: 32px;
    background-color: #ccc;
  }
`;


export const ListItem = styled.div`
  position: relative;
  padding: 15px 2px 20px 0;
  margin: 0 0 15px;
  border-bottom: 1px solid #f0f0f0;
  word-wrap: break-word;
  .list-img {
    position: absolute;
    right: 0;
    top: 50%;
    margin-top: -60px;
    width: 150px;
    height: 100px;
    border-radius: 4px;
    border: 1px solid #f0f0f0;
    background: #ccc;
    &.list-img-hide {
      display: none;
    }
  }
`;


export const ListInfo = styled.div`
  .title {
    font-size: 18px;
    line-height: 1.5;
    font-weight: bold;
    margin: -7px 0 4px;
    color: #333;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
  .abstract {
    margin-bottom: 8px;
    line-height: 24px;
    font-size: 13px;
    color: #999;
  }
  .meta {
    font-size: 12px;
    font-weight: 400;
    line-height: 20px;
  }
  .meta-info {
    margin-right: 10px;
    color: #b4b4b4;
    .iconfont {
      margin-right: 2px;
    }
  }
  .score {
    color: #ea6f5a;
    
  }
  &.have-img {
    padding-right: 165px;
  }
`;

// recommend

export const RecommendWrapper = styled.div`
  margin-bottom: 30px;
`

export const RecommendItem = styled.div`
  width: 280px;
  height: 50px;
  margin-bottom: 6px;
  .recommend-img {
    display: block;
    width: 100%;
  }
`


// writer

export const WriterWrapper = styled.div`
  margin-top: 15px;
`

export const WriterTitle = styled.div`
  font-size: 14px;
  color: #969696;
  .switch {
    float: right;
    cursor: pointer;
  }
`

export const WriterItem = styled.div`
  overflow: hidden;
  margin-top: 15px;
  .img {
    float: left;
    margin-right: 10px;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background-color: #ccc;
  }
  .follow {
    float: right;
    margin-top: 5px;
    font-size: 13px;
    color: #42c02e;
    cursor: pointer;
  }
  .nickName,
  .des {
    display: block;
  }
  .nickName {
    color: #333;
    line-height: 20px;
    padding-top: 5px;
    margin-right: 60px;
    font-size: 14px;
  }
  .des {
    margin-top: 2px;
    font-size: 12px;
    color: #969696;
  }
`

export const AllWriter = styled.button`
  display: block;
  margin-top: 20px;
  padding: 7px 7px 7px 12px;
  width: 100%;
  font-size: 13px;
  color: #787878;
  background-color: #f7f7f7;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  cursor: pointer;
`