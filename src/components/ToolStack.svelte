<script setup lang="ts">
	import BackendTools from './BackendTools.svelte';
	import InfoBox from './InfoBox.svelte';
	import DeploymentTools from './DeploymentTools.svelte';
	import FrontendTools from './FrontendTools.svelte';
	import TestingAndObservabilityTools from './TestingAndObservabilityTools.svelte';
</script>

<InfoBox title="Frontend tools">
	<FrontendTools />
</InfoBox>
<InfoBox title="Backend tools">
	<BackendTools />
</InfoBox>
<InfoBox title="Deployment tools">
	<DeploymentTools />
</InfoBox>
<InfoBox title="Testing and observability tools">
	<TestingAndObservabilityTools />
</InfoBox>
