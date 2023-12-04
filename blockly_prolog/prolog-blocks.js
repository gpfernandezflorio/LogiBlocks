goog.require('Blockly.Blocks');
goog.require('Blockly');

Blockly.Blocks['prolog_fact'] = {
    init: function () {
        this.setColour('#648bb1');
        this.setPreviousStatement(true, ['MainEditor', 'BlockedNesting']);
        this.setNextStatement(true, ['MainEditor', 'BlockedNesting']);
        this.setTooltip('Un hecho simple que consta de una relación y varios términos.');
        this.setInputsInline(true);
        this.appendDummyInput().appendField('Hecho');
        this.appendValueInput('PREDICATE');
        this.appendStatementInput('FACT_ARGS').setCheck('BlockedNesting');
        // this.setHelpUrl("https://www.tinohempel.de/info/info/prolog/fakten.htm");
    }
};

Blockly.Blocks['prolog_constant_input'] = {
    init: function () {
        this.setColour('#54a833');
        // this.setHelpUrl("https://www.tinohempel.de/info/info/prolog/fakten.htm");
        this.setOutput(true, null);
        this.setTooltip('Las constantes siempre comienzan con una letra minúscula y pueden contener un guión bajo (pero no al principio). También pueden consistir únicamente en números si es necesario.');
        let textInput = new PrologParser.DynamicFieldTextInput('constante', 'Constant', this);
        this.appendDummyInput('DUMMY_INPUT')
            .appendField(textInput, 'CONSTANT_NAME');
    }
};

Blockly.Blocks['prolog_variable_input'] = {
    init: function () {
        this.setColour('#c54717');
        // this.setHelpUrl("https://www.tinohempel.de/info/info/prolog/fakten.htm");
        this.setOutput(true, null);
        this.setTooltip('Las variables sólo pueden comenzar con una letra mayúscula o un guión bajo.');
        let textInput = new PrologParser.DynamicFieldTextInput('Variable', 'Variable', this);
        this.appendDummyInput('DUMMY_INPUT')
            .appendField(textInput, 'VARIABLE_NAME');
    }
};

Blockly.Blocks['prolog_operation'] = {
    init: function () {
        this.setColour('#767e9b');
        // this.setHelpUrl("https://www.tinohempel.de/info/info/prolog/arithmetik.htm");
        this.setTooltip('El bloque de operaciones es la base de toda operación matemática.');
        this.setPreviousStatement(true, ['MainEditor', 'BlockedNesting']);
        this.setNextStatement(true, ['MainEditor', 'BlockedNesting']);
        this.setInputsInline(false);
        this.appendValueInput('OP_ARGS').appendField('Operación').setCheck('MathOperation');
    }
};

Blockly.Blocks['prolog_math_operation'] = {
    init: function () {
        this.setColour('#868da8');
        // this.setHelpUrl("https://www.tinohempel.de/info/info/prolog/arithmetik.htm");
        this.setTooltip('Para calcular operaciones matemáticas.');
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.appendValueInput('FIRST_ARG');
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([
                ["+", "PLUS"],
                ["-", "MINUS"],
                ["/", "DIV"],
                ["\u00D7", "MULTI"],
                ["módulo", "MOD"]
            ]), 'OPERATOR');
        this.appendValueInput('SECOND_ARG');
    }
};

Blockly.Blocks['prolog_arithmetic_operation'] = {
    init: function () {
        this.setColour('#868da8');
        this.setInputsInline(true);
        this.setOutput(true, null);
        // this.setHelpUrl("https://www.tinohempel.de/info/info/prolog/arithmetik.htm");
        this.setTooltip('Se pueden realizar comparaciones utilizando este bloque.');
        this.appendValueInput('FIRST_ARG');
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([
                ["unifica con", "EQ"],
                ["no unifica con", "NEQ"],
                ["es menor a", "LT"],
                ["es menor o igual a", "LTE"],
                ["es mayor a", "GT"],
                ["es mayor o igual a", "GTE"],
                ["es igual a", "IDT"],
                ["es distinto a", "NIDT"],
                ["vale lo mismo que", "NUMIDT"],
                ["no vale lo mismo que", "NUMNIDT"]
            ]), 'OPERATOR');
        this.appendValueInput('SECOND_ARG');
    }
};

Blockly.Blocks['prolog_is_operation']= {
    init: function () {
        this.setColour('#868da8');
        // this.setHelpUrl("https://www.tinohempel.de/info/info/prolog/arithmetik.htm");
        this.setTooltip('Este operador evalúa la expresión derecha y la asigna a la variable de asignación izquierda.');
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.appendDummyInput().appendField('unificar');
        this.appendValueInput('FIRST_ARG');
        this.appendDummyInput().appendField('con');
        this.appendValueInput('SECOND_ARG');
    }
};

Blockly.Blocks['prolog_constant'] = {
    init: function () {
        this.setColour('#54a833');
        // this.setHelpUrl("https://www.tinohempel.de/info/info/prolog/fakten.htm");
        this.setTooltip('Las constantes siempre comienzan con una letra minúscula y pueden contener un guión bajo (pero no al principio). También pueden consistir únicamente en números si es necesario.');
        this.setPreviousStatement(true, ['MainEditor', 'BlockedNesting']);
        this.setNextStatement(true, ['MainEditor', 'BlockedNesting']);
        let textInput = new PrologParser.DynamicFieldTextInput('constante', 'Constant', this);
        this.appendDummyInput('DUMMY_INPUT')
            .appendField('Constante')
            .appendField(textInput, 'CONSTANT_NAME');
    }
};

Blockly.Blocks['prolog_predicate'] = {
    init: function () {
        this.setColour('#54a833');
        // this.setHelpUrl("https://www.tinohempel.de/info/info/prolog/fakten.htm");
        this.setTooltip('Las relaciones siempre comienzan con una letra minúscula y pueden contener un guión bajo (pero no al principio).');
        this.setOutput(true, null);
        let textInput = new PrologParser.DynamicFieldTextInput('relación', 'Constant', this);
        this.appendDummyInput('DUMMY_INPUT')
            .appendField('Relación')
            .appendField(textInput, 'PREDICATE_NAME');
    }
};

Blockly.Blocks['prolog_variable'] = {
    init: function () {
        this.setColour('#c54717');
        // this.setHelpUrl("https://www.tinohempel.de/info/info/prolog/fakten.htm");
        this.setPreviousStatement(true, ['MainEditor', 'BlockedNesting']);
        this.setNextStatement(true, ['MainEditor', 'BlockedNesting']);
        this.setTooltip('Las variables sólo pueden comenzar con una letra mayúscula o un guión bajo.');
        let textInput = new PrologParser.DynamicFieldTextInput('Variable', 'Variable', this);
        this.appendDummyInput('DUMMY_INPUT')
            .appendField('Variable')
            .appendField(textInput, 'VARIABLE_NAME');
    }
};

Blockly.Blocks['prolog_list'] = {
    init: function() {
        // this.setHelpUrl("http://www.tinohempel.de/info/info/prolog/index.htm");
        this.setTooltip('Una lista puede contener todos los demás términos. El separador separa explícitamente el primer elemento del resto de la lista.');
        this.setPreviousStatement(true, ['MainEditor', 'BlockedNesting']);
        this.setNextStatement(true, ['MainEditor', 'BlockedNesting']);
        this.setColour('#be6b1b');
        this.appendDummyInput()
            .appendField('Lista');
        this.appendDummyInput()
            .appendField(new PrologParser.InfoTextField('Separador', '#FFF'))
            .appendField(new Blockly.FieldCheckbox(false), 'VERTICAL_BAR');
        this.appendStatementInput('LIST_ARG')
            .setCheck('BlockedNesting');
        this.setTooltip('');
    }
};


Blockly.Blocks['prolog_log_operation'] = {
    init: function () {
        this.setColour('#0f9aa6');
        this.setPreviousStatement(true, ['MainEditor', 'BlockedNesting']);
        this.setNextStatement(true, ['MainEditor', 'BlockedNesting']);
        this.appendDummyInput()
            .appendField('Conector: ')
            .appendField(new Blockly.FieldDropdown([
                ["y", "AND"],
                ["o", "OR"]
            ]), 'OPERATOR');
        this.appendStatementInput('ARGS');
    }
};

Blockly.Blocks['prolog_rule_head_fact'] = {
    init: function () {
        // this.setHelpUrl("https://www.tinohempel.de/info/info/prolog/regeln.htm");
        this.setColour('#0f9aa6');
        this.setPreviousStatement(true);
        this.setTooltip('Un hecho simple que consta de una relación y uno o más términos.');
        this.setInputsInline(true);
        this.appendDummyInput().appendField('Hecho');
        this.appendValueInput('PREDICATE');
        this.appendStatementInput('FACT_ARGS').setCheck('BlockedNesting');
        this.setDeletable(false);
        this.setMovable(false);
    }
};

Blockly.Blocks['prolog_rule_body_con'] = {
    init: function () {
        // this.setHelpUrl("https://www.tinohempel.de/info/info/prolog/regeln.htm");
        this.setColour('#0f9aa6');
        this.setPreviousStatement(true);
        this.setDeletable(false);
        this.setMovable(false);
        this.appendDummyInput()
            .appendField('Condición: ')
            .appendField(new Blockly.FieldDropdown([
                ["y", "AND"],
                ["o", "OR"]
            ]), 'OPERATOR');
        this.appendStatementInput('ARGS');
    }
};

Blockly.Blocks['prolog_query_body'] = {
    init: function () {
        // this.setHelpUrl("https://www.tinohempel.de/info/info/datenbanken_prolog/abfragen_I.htm");
        this.setColour(240);
        this.setPreviousStatement(true);
        this.setDeletable(false);
        this.setMovable(false);
        this.appendDummyInput()
            .appendField('¿Qué se debe comprobar?')
            .appendField(new Blockly.FieldDropdown([
                ["y", "AND"],
                ["o", "OR"]
            ]), 'OPERATOR');
        this.appendStatementInput('ARGS');
    }
};

Blockly.Blocks['prolog_rule'] = {
    init: function() {
        // this.setHelpUrl("https://www.tinohempel.de/info/info/prolog/regeln.htm");
        this.setTooltip('Las reglas definen relaciones condicionales entre hechos.');
        this.setPreviousStatement(true, ['MainEditor']);
        this.setNextStatement(true, ['MainEditor']);
        this.setCommentText('Describí esta regla ...');
        this.appendDummyInput()
            .appendField('Regla');
        this.appendStatementInput('INPUT_HEAD')
            .setCheck("prolog_fact");

        this.appendStatementInput('INPUT_BODY')
            .setCheck("prolog_fact");

        this.setColour('#0f97a3');
        this.setInputsInline(false);
    }
};

Blockly.Blocks['prolog_query'] = {
    init: function() {
        // this.setHelpUrl("https://www.tinohempel.de/info/info/datenbanken_prolog/abfragen_I.htm");
        this.appendDummyInput("QUERY_DATA")
            .appendField('Consulta');
        let block = this;
        let checkbox = new Blockly.FieldCheckbox(false, function (newValue) {
            if(PrologParser.workspace.isDragging()) return;
            this.value_ = this.convertValueToBool_(newValue);
            if (this.textElement_) this.textElement_.style.display = this.value_ ? 'block' : 'none';
            PrologParser.changeActiveQuery(block, this.value_);
        });
        this.appendDummyInput().appendField("| Activa: ")
            .appendField(checkbox, 'QUERY_ACTIVE');
        this.appendStatementInput('INPUT');
        this.setColour(240);
        this.setInputsInline(true);
        this.setPreviousStatement(true, ['MainEditor']);
        this.setNextStatement(true, ['MainEditor']);
        this.setTooltip('Una consulta.');
    },
    onchange: function (e) {
        //Make this block editable if its placed in the main workspace.
        if(e.type === 'move') {
            if(this.workspace.id === PrologParser.workspace.id) {
                if(!this.isEditable()) this.setEditable(true);
            }
        }
    }
};


Blockly.Blocks['prolog_cut_fail'] = {
    init: function () {
        // this.setHelpUrl("https://www.tinohempel.de/info/info/datenbanken_prolog/cut.htm");
        this.setColour('#48887a');
        this.setPreviousStatement(true, ['MainEditor', 'BlockedNesting']);
        this.setNextStatement(true, ['MainEditor', 'BlockedNesting']);
        this.appendDummyInput()
            .appendField('Operador: ')
            .appendField(new Blockly.FieldDropdown([
                ["Cut", "CUT"],
                ["Fail", "FAIL"]
            ]), 'OPERATOR');
    },
    onchange: function(e) {
        if(e.type === 'move') {
            if(this.workspace.id !== PrologParser.workspace.id) {
                return;
            }
            if (!PrologParser.workspace.isDragging || PrologParser.workspace.isDragging()) {
                return;  // Don't change state at the start of a drag.
            }
            if(this.getSurroundParent() !== null) {
                this.setEnabled(true);
                this.setWarningText(null);
            } else {
                if(this.isCollapsed()) return;
                this.setEnabled(false);
                this.setWarningText(PrologParser.ERRORS['CUT_FAIL_ERROR']);
            }
        }
    }
};

Blockly.Blocks['info_block_input'] = {
    init: function () {
        this.setEnabled(true);
        this.setColour('#8e904d');
        this.setOutput(true, null);
        this.appendDummyInput('DUMMY_INPUT').appendField(new PrologParser.InfoTextField(''), 'TEXT');
    }
};

Blockly.Blocks['info_block_statement'] = {
    init: function () {
        this.setEnabled(true);
        this.setColour('#8e904d');
        this.setPreviousStatement(true);
        this.setNextStatement(false);
        this.appendDummyInput('DUMMY_INPUT').appendField(new PrologParser.InfoTextField(''), 'TEXT');
    }
};