import styled from "styled-components";
const StyledNav = styled.div`
nav {
    background: rgba(0,0,0,0.3);
    width: max-content;
    display: block;
    padding: 0.7rem 1.7rem;
    z-index: 2;
    position: fixed;
    transform: translateX(-50%);
    left: 50%;
    bottom: 2rem;
    display: flex;
    gap: 0.8rem;
    border-radius: 3rem;
    backdrop-filter: blur(15px);
  }
  @media screen and (min-width: 500px){
    nav{
      max-width: 85%;
    }
  }  
  nav a{
      background: transparent;
      padding: 0.5rem;
      border-radius: 50%;
      display: flex;
      color: var(--color-light);
      font-size: 1.1rem;
  }
  
  nav a:hover{
    background: rgba(0,0,0,0.3);
  }
  
  nav a.active{
    background: var(--color-primary);
    color: var(--color-bg);
  }
`;
export default StyledNav