import {init} from 'openbpt-service-core';
import run from './service';
import manifest from './manifest';

init(manifest, run);
