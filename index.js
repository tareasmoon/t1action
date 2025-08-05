const core = require('@actions/core');

try {
  const edad = parseInt(core.getInput('edad'));
  const nombre = core.getInput('nombre');
  const apellido = core.getInput('apellido');
  const aniosRestantes = 100 - edad;

  console.log(`A ${nombre} ${apellido} le faltan ${aniosRestantes} años para cumplir 100 años.`);
} catch (error) {
  core.setFailed(error.message);
}