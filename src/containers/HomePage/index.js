import { PageContainer } from '../../components/PageContainer';
import { TopSection } from '../../components/PageContainer/TopSection';
import { NavigationBar } from "../../components/NavigationBar";

export function HomePage(props) {
  return (
    <PageContainer>
      <TopSection>
        <NavigationBar/>
      </TopSection>
    </PageContainer>
  )
}