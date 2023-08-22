import { useEffect, useState } from 'react';

import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Collapse from '@mui/material/Collapse';
import Stack from '@mui/material/Stack';

// import TransferFrom from '../TransferFrom';

import { MAINNET_CHAIN_NAME } from '../core/constants'

import {
  TransferETF,
  TransferETA,
  SkPaper,
  AmountInput,
  SwitchDirection,
  SkStepper,
  ChainsList,
  TokenList,
  interfaces,
  useCollapseStore,
  useMetaportStore,
  cls,
  cmn,
  styles,
  AmountErrorMessage,
  TokenBalance,
  DestTokenBalance,
  ErrorMessage,
  CommunityPool
} from '@skalenetwork/metaport';



export default function Main(props: any) {

  // const [tokenOnce, setTokenOnce] = useState<boolean>(false);

  const expandedFrom = useCollapseStore((state) => state.expandedFrom)
  const setExpandedFrom = useCollapseStore((state) => state.setExpandedFrom)

  const expandedTo = useCollapseStore((state) => state.expandedTo)
  const setExpandedTo = useCollapseStore((state) => state.setExpandedTo)

  const expandedCP = useCollapseStore((state) => state.expandedCP)
  const expandedTokens = useCollapseStore((state) => state.expandedTokens)

  const token = useMetaportStore((state) => state.token)
  const setToken = useMetaportStore((state) => state.setToken)
  const tokenBalances = useMetaportStore((state) => state.tokenBalances)
  const tokens = useMetaportStore((state) => state.tokens)
  const chainName1 = useMetaportStore((state) => state.chainName1)
  const chainName2 = useMetaportStore((state) => state.chainName2)
  const destChains = useMetaportStore((state) => state.destChains)

  const setChainName1 = useMetaportStore((state) => state.setChainName1)
  const setChainName2 = useMetaportStore((state) => state.setChainName2)

  const transferInProgress = useMetaportStore((state) => state.transferInProgress)
  const mpc = useMetaportStore((state) => state.mpc)

  const amountErrorMessage = useMetaportStore((state) => state.amountErrorMessage)
  const errorMessage = useMetaportStore((state) => state.errorMessage)

  useEffect(() => {
    setChainName1(mpc.config.chains ? mpc.config.chains[0] : '')
    setChainName2(mpc.config.chains ? mpc.config.chains[1] : '')
  }, []);

  useEffect(() => {
    if (tokens && tokens.erc20) {
      setToken(Object.values(tokens.erc20)[0])
    }
  }, [tokens]);


  const showFrom = !expandedTo && !expandedTokens && !errorMessage && !expandedCP
  const showTo = !expandedFrom && !expandedTokens && !errorMessage && !expandedCP
  const showInput = !expandedFrom && !expandedTo && !errorMessage && !expandedCP
  const showSwitch = !expandedFrom && !expandedTo && !expandedTokens && !errorMessage && !expandedCP
  const showStepper = !expandedFrom && !expandedTo && !expandedTokens && !errorMessage && !expandedCP
  const showCP = !expandedFrom && !expandedTo && !expandedTokens && chainName2 === MAINNET_CHAIN_NAME
  const showError = !!errorMessage


  return (
    <Container maxWidth="sm">
      <Stack spacing={0}>
        <div className={cls(cmn.flex, cmn.mbott20)}>
          <h2 className={cls(cmn.nom)}>Transfer</h2>
        </div>
        <Collapse in={showError}>
          <ErrorMessage errorMessage={errorMessage} />
        </Collapse>
        <SkPaper gray className={cmn.nop}>
          <Collapse in={showFrom}>
            <div className={cls(cmn.ptop20, cmn.mleft20, cmn.mri20, cmn.flex)}>
              <p className={cls(cmn.nom, cmn.p, cmn.p4, cmn.pSec, cmn.flex, cmn.flexg)}>From</p>
              {token ? <TokenBalance
                balance={tokenBalances[token.keyname]}
                symbol={token.meta.symbol}
                decimals={token.meta.decimals ?? ''}
              /> : null}
            </div>
            <ChainsList
              config={mpc.config}
              expanded={expandedFrom}
              setExpanded={setExpandedFrom}
              chain={chainName1}
              chains={mpc.config.chains ?? []}
              setChain={setChainName1}
              disabledChain={chainName2}
              disabled={transferInProgress}
              from={true}
            />
          </Collapse>

          <Collapse in={showInput}>
            <SkPaper gray className={cls()}>
              <AmountInput />
              <Collapse in={!!amountErrorMessage || amountErrorMessage === ''}>
                <div className={cls(cmn.mbott20, cmn.mleft10)}>
                  <AmountErrorMessage />
                </div>
              </Collapse>

            </SkPaper>
          </Collapse>
        </SkPaper>

        <Collapse in={showSwitch} >
          <SwitchDirection />
        </Collapse>

        <Collapse in={showTo}>
          <SkPaper gray className={cmn.nop}>
            <div className={cls(cmn.ptop20, cmn.mleft20, cmn.mri20, cmn.flex)}>
              <p className={cls(cmn.nom, cmn.p, cmn.p4, cmn.pSec, cmn.flex, cmn.flexg)}>To</p>
              <DestTokenBalance />
            </div>
            <ChainsList
              config={mpc.config}
              expanded={expandedTo}
              setExpanded={setExpandedTo}
              chain={chainName2}
              chains={destChains}
              setChain={setChainName2}
              disabledChain={chainName1}
              disabled={transferInProgress}
            />
          </SkPaper>
        </Collapse>
        <Collapse in={showCP}>
          <SkPaper gray className={cmn.nop}>
            <CommunityPool />
          </SkPaper>
        </Collapse>
        <Collapse in={showStepper} className={cmn.mtop20} >
          <SkStepper skaleNetwork={mpc.config.skaleNetwork} />
        </Collapse>
      </Stack>
    </Container>)
}