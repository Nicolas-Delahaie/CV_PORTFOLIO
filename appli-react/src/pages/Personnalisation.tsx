import React from "react";

export function Personnalisation({ datas }: { datas: any }) {
  return (
    datas && (
      <form>
        {/* {
                datas.savoir_faire.map((data, i) =>
                    <>
                        <input type="checkbox" name="savoir_faire" id="case1" />
                        <label for="case1">Truc 1</label>
                        <br />
                    </>
                )
            }


            <input type="checkbox" name="case2" id="case2" />
            <label for="case1">Truc 2</label>
            <br />
            <input type="checkbox" name="case3" id="case3" />
            <label for="case1">Truc 3</label> */}
      </form>
    )
  );
}
