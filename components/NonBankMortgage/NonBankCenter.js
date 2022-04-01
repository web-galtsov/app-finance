import {RegularList} from "./RegularList";
import {LargePersonListItem} from "./LargePersonListItem";
import {centerData} from "./DataNon";
import {
    Container,
    RowTem,
    WrapContent
} from "@/layout/Styles";

const NonBankCenter = () => {
    return (
        <>
            <WrapContent className="pt pb">
                <Container>
                    <RowTem style={{justifyContent: "center"}}>
                        <RegularList
                            items={centerData}
                            resourceName= "person"
                            itemComponent={LargePersonListItem}
                        />
                    </RowTem>
                </Container>
            </WrapContent>
        </>
    )
}

export default NonBankCenter
