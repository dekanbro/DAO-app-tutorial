// ExampleComponent.tsx
import styled from 'styled-components';
import { H1, Tag } from '@daohaus/ui';
 
const CrazyH1 = styled(H1)`
  font-size: 15rem;
  text-decoration: underline;
  text-shadow: 0.03em 0.03em 0 hsla(230, 40%, 50%, 1);
`;
 
const BigTag = styled(Tag)`

  height: 20rem;
  font-size: 8rem;
`;
 
export const ExampleComponent = () => {
  return (
    <div>
      <CrazyH1>WordSmiths</CrazyH1>
      <BigTag tagColor="pink">Publication</BigTag>
    </div>
  );
};