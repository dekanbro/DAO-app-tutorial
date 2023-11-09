// ExampleComponent.tsx
import styled from 'styled-components';
import { H1, Tag } from '@daohaus/ui';
 
const CrazyH1 = styled(H1)`
  font-size: 17rem;
  text-decoration: underline;
  text-shadow: 0.03em 0.03em 0 hsla(230, 40%, 50%, 1);
`;
 
const BigTag = styled(Tag)`
  width: 30rem;
  height: 20rem;
  font-size: 8rem;
`;
 
export const ExampleComponent = () => {
  return (
    <div>
      <CrazyH1>CrazyHeading</CrazyH1>
      <BigTag tagColor="pink">BigTag</BigTag>
    </div>
  );
};