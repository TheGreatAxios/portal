/**
 * @license
 * SKALE bridge-ui
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

/**
 * @file ChainCard.tsx
 * @copyright SKALE Labs 2022-Present
 */

import { Link } from "react-router-dom";
import {
  cmn,
  cls,
  ChainIcon,
  chainBg,
  getChainAlias,
  BASE_EXPLORER_URLS,
  type interfaces,
} from "@skalenetwork/metaport";

import Button from "@mui/material/Button";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import UnfoldMoreRoundedIcon from "@mui/icons-material/UnfoldMoreRounded";

import { getExplorerUrl } from "./SchainDetails";

export default function ChainCard(props: {
  skaleNetwork: interfaces.SkaleNetwork;
  schain: any[];
}) {
  const explorerUrl = getExplorerUrl(
    BASE_EXPLORER_URLS[props.skaleNetwork],
    props.schain[0],
  );
  return (
    <div>
      <div className="fl-centered">
        <div
          className={cls("br__tile", cmn.flex)}
          style={{ background: chainBg(props.skaleNetwork, props.schain[0]) }}
        >
          <Link
            to={"/chains/" + props.schain[0]}
            className={cls(cmn.flex, cmn.flexg, cmn.flexc, "br__tileLogo")}
          >
            <div className={cls(cmn.flex, cmn.flexg, cmn.flexc)}>
              <ChainIcon
                skaleNetwork={props.skaleNetwork}
                chainName={props.schain[0]}
                size="lg"
              />
            </div>
          </Link>
          <div
            className={cls(
              cmn.flex,
              cmn.flexcv,
              cmn.mbott10,
              cmn.mleft10,
              "br__tileBott",
              "fullWidth",
            )}
          >
            <div className={cls(cmn.fflex, cmn.flexg)}>
              <div>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={explorerUrl}
                  className="undec"
                >
                  <Button
                    endIcon={<ArrowOutwardIcon />}
                    size="small"
                    className="cardBtn"
                  >
                    Explorer
                  </Button>
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={explorerUrl}
                  className={cls(cmn.mleft5)}
                >
                  <Button
                    endIcon={<UnfoldMoreRoundedIcon />}
                    size="small"
                    className="cardBtn"
                  >
                    Info
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <p
          className={cls(
            cmn.p,
            cmn.pCent,
            cmn.p3,
            cmn.pPrim,
            cmn.mtop10,
            cmn.p600,
          )}
        >
          {getChainAlias(props.skaleNetwork, props.schain[0])}
        </p>
      </div>
    </div>
  );
}
