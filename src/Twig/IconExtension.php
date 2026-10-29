<?php

declare(strict_types=1);

namespace Drupal\ecl5\Twig;

use Drupal\Core\Extension\ModuleExtensionList;
use Twig\Extension\AbstractExtension;
use Twig\TwigFunction;

/**
 * Provides the ecl5_icon_sprite() Twig function.
 *
 * Returns the browser URL of the bundled Phosphor icon sprite so the icon
 * component can reference symbols with <use> regardless of where the module
 * is installed.
 */
final class IconExtension extends AbstractExtension {

  public function __construct(
    private readonly ModuleExtensionList $moduleList,
  ) {}

  /**
   * {@inheritdoc}
   */
  public function getFunctions(): array {
    return [
      new TwigFunction('ecl5_icon_sprite', [$this, 'getSpritePath']),
    ];
  }

  /**
   * Builds the URL to the bundled icon sprite.
   */
  public function getSpritePath(): string {
    return base_path() . $this->moduleList->getPath('ecl5') . '/assets/icons/phosphor.svg';
  }

}
