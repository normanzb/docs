---
sidebar_position: 0
title: Multisig
hide_table_of_contents: false
---
import DocCardList from '@theme/DocCardList';

# Multisig

A **multisig account** is an Aura account with a special key that can require more than one signature to sign transactions. This can be useful for increasing the security of the account or for requiring the consent of multiple parties to make transactions. Multisig accounts can be created by specifying:

- Threshold number of signatures required
- The public keys involved in signing

To sign with a multisig account, the transaction must be signed individually by the different keys specified for the account. Then, the signatures will be combined into a multi-signature which can be used to sign the transaction. If fewer than the threshold number of signatures needed are present, the resultant multi-signature is considered invalid.

# Here are all the steps:

<DocCardList />