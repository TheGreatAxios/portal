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
 * @file AllApps.tsx
 * @copyright SKALE Labs 2024-Present
 */

import React, { useMemo } from 'react'
import { type types } from '@/core'
import { useLikedApps } from '../../LikedAppsContext'
import AppCardV2 from './AppCardV2'
import { Grid } from '@mui/material'
import { isNewApp } from '../../core/ecosystem/utils'

interface AllAppsProps {
  skaleNetwork: types.SkaleNetwork
  chainsMeta: types.ChainsMetadataMap
  apps: types.AppWithChainAndName[]
  newApps: types.AppWithTimestamp[]
}

const AllApps: React.FC<AllAppsProps> = ({ skaleNetwork, chainsMeta, apps, newApps }) => {
  const { getTrendingApps, getAppId } = useLikedApps()

  const trendingAppIds = useMemo(() => getTrendingApps(), [getTrendingApps])

  return (
    <Grid container spacing={2}>
      {apps.map((app: types.AppWithChainAndName) => {
        const appId = getAppId(app.chain, app.appName)
        const isTrending = trendingAppIds.includes(appId)
        const isNew = isNewApp({ chain: app.chain, app: app.appName }, newApps)
        return (
          <Grid key={appId} item xs={12} sm={6} md={4} lg={4}>
            <AppCardV2
              skaleNetwork={skaleNetwork}
              schainName={app.chain}
              appName={app.appName}
              chainsMeta={chainsMeta}
              isTrending={isTrending}
              isNew={isNew}
            />
          </Grid>
        )
      })}
    </Grid>
  )
}

export default AllApps