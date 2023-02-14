import { Page, PageContent } from "grommet"
const Container = (props)=>{
    return(
        <Page kind="narrow">
          <PageContent>
            {props.children}
          </PageContent>
        </Page>
    )
}
export default Container