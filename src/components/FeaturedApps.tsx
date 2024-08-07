/**
 * @license
 * SKALE portal
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
 * @file FeaturedApps.tsx
 * @copyright SKALE Labs 2024-Present
 */

import { Grid } from '@mui/material'
import { type types } from '@/core'

import AppCard from './ecosystem/AppCardV2'

function getFeaturedApps(chainsMeta: types.ChainsMetadataMap): types.IAppId[] {
  const featuredApps: types.IAppId[] = []
  for (const chain in chainsMeta) {
    const apps = chainsMeta[chain].apps
    for (const appKey in apps) {
      const app = apps[appKey]
      if (app.featured) {
        featuredApps.push({
          chain: chain,
          app: appKey
        })
      }
    }
  }
  return featuredApps.sort((a, b) => a.app.localeCompare(b.app))
}

export default function FeaturedApps(props: {
  skaleNetwork: types.SkaleNetwork
  chainsMeta: types.ChainsMetadataMap
}) {
  const featuredApps = getFeaturedApps(props.chainsMeta)
  return (
    <Grid container spacing={2}>
      {featuredApps.slice(0, 3).map((appId, index) => (
        <Grid key={index} className="fl-centered dappCard" item lg={4} md={4} sm={6} xs={6}>
          <AppCard
            skaleNetwork={props.skaleNetwork}
            schainName={appId.chain}
            appName={appId.app}
            chainsMeta={props.chainsMeta}
          />
        </Grid>
      ))}
    </Grid>
  )
}
