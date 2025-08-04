const core = require('@actions/core');

try {
  const edad = parseInt(core.getInput('edad'));
  const nombre = core.getInput('nombre');
  const apellido = core.getInput('apellido');
  const añosRestantes = 100 - edad;

  console.log(`A ${nombre} ${apellido} le faltan ${añosRestantes} años para cumplir 100 años.`);
} catch (error) {
  core.setFailed(error.message);
}