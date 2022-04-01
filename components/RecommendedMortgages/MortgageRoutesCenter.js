import {RegularList} from "./RegularList";
import {LargePersonListItem} from "./LargePersonListItem";
import {differentData} from "./DataRecom";
import {
    Container,
    RowTem,
    WrapContent
} from "@/layout/Styles";

const MortgageRoutesCenter = () => {
    return (
        <>
            <WrapContent className="pt pb">
                <Container>
                    <RowTem style={{justifyContent: "center"}}>
            <RegularList
                items={differentData}
                resourceName= "person"
                itemComponent={LargePersonListItem}
            />
                    </RowTem>
                </Container>
            </WrapContent>
        </>
    )
}

export default MortgageRoutesCenter
