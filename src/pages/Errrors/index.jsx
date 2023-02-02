import * as GS from '../../GlobalStyle';
import Error404 from '../../components/Others/Error404';

function Error() {
  return (
    <GS.Wrapper>
      <GS.Container>
        <GS.Main>
          <Error404 />
        </GS.Main>
      </GS.Container>
    </GS.Wrapper>
  );
}

export default Error;
